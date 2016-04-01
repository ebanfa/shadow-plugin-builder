<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class ReceiptAPI  {

    public static $eventTypeCode = 'RECEIPT';

    /**
     *
     */
    public static function do_create_entity($entity_data){
        // 1. Get the payment type for receipts
        $receipt_payment_type_data = EntityAPI::get_by_code('paymenttype', ReceiptAPI::$eventTypeCode);

        if(isset($receipt_payment_type_data['id'])){
            // 2. Get the to party as the current party
            $entity_data ['p_type'] = $receipt_payment_type_data['id'];

            $party_data = PartyAPI::get_current_user_party();
            if(isset($party_data['id'])) $entity_data ['p_tparty'] = $party_data['id'];

            $entity_data = EntityAPI::do_create_entity($entity_data);
            // 3. Create the payment applications
            $payment_applications_list = self::do_create_pay_application($entity_data);

            foreach ($payment_applications_list as $payment_application) {
                self::do_create_financial_events($entity_data, $payment_application);
            }
        }
        return $entity_data;
        
    }

    /**
     *
     */
    public static function do_find_entity($entity_data) {
        return EntityAPI::do_find_entity($entity_data);
    }

    /**
     *
     */
    public static function do_delete_entity($entity_data) {
        return EntityAPI::do_delete_entity($entity_data);
    }

    /**
     *
     */
    public static function do_create_pay_application($entity_data){
        $payment_applications_list = array();
        // 1. Check for the segments request param
        if(isset($_POST['paymentapplication'])) {
            // 2. Loop through the array of segments objects (JSON encoded)
            $payment_applications = $_POST['paymentapplication'];
            $payment_applications_count = 1;
            // Sort the segments according to segment sequence
            foreach ($payment_applications as $payment_application) {
                $payment_application = json_decode(stripslashes($payment_application), true);
                $payment_application_data = EntityAPIUtils::init_entity_data('paymentapplication');
                $payment_application_data['edit_mode'] = true;
                $payment_application_data['pa_payment'] = $entity_data['id'];
                $payment_application_data['name'] = $payment_application['name'];

                if(isset($payment_application['pa_account'])) $payment_application_data['pa_account'] = $payment_application['pa_account'];
                if(isset($payment_application['pa_invoice'])) $payment_application_data['pa_invoice'] = $payment_application['pa_invoice'];

                $payment_application_data['amount'] = str_replace(',', '', $payment_application['amount']); ;
                $payment_application_data['effective_date'] = $payment_application['effective_date'];
                $payment_application_data['description'] = $payment_application['description'];
                $payment_application_data = EntityAPI::do_create_entity($payment_application_data);

                $payment_applications_count++;
                // add to the list
                array_push($payment_applications_list, $payment_application_data);
            }
        }
        return $payment_applications_list;
    }

    
    /**
     *
     */
    public static function do_create_financial_events($entity_data, $payment_application){
        // Get the financial event type for incoming payments
        $event_type_data = EntityAPI::get_by_code('financialeventtype', self::$eventTypeCode);
        if(isset($event_type_data['id'])) {
            // init the financial event data with type from above
            $event_data = EntityAPIUtils::init_entity_data('financialevent');
            // Set event attributes
            $event_data['edit_mode'] = true;
            $event_data['name'] = $entity_data['name'];
            $event_data['payment'] = $entity_data['id'];
            $event_data['event_date'] = date("Y-m-d H:i:s");
            $event_data['description'] = $entity_data['name'];
            $event_data['event_type'] = $event_type_data['id'];
            $event_data['to_party'] = $entity_data['p_tparty'];
            $event_data['from_party'] = $entity_data['p_fparty'];
            $event_data['amount'] = $payment_application['amount'];

            $internal_org = BusinessUnitAPI::get_current_user_business_unit();
            if(isset($internal_org['id'])) $event_data['internal_org'] = $internal_org['id'];

            if(isset($payment_application['invoice'])) $event_data['invoice'] = $entity_data['name'];
            // Create the instance data
            $event_data = EntityAPI::do_create_entity($event_data);
            // Call the posting engine to process the event
            TransactionService::process_financial_event($event_data);
        }

    }

}
