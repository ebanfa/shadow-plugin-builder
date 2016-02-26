<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class TenantAgreementAPI extends EntityAPI {

    /**
     *
     */
    public static function do_create_entity($entity_data){

        $entity_data['has_errors'] = false;
        if ($entity_data['edit_mode']) {
            // Create the order
            if(isset($entity_data['entity_code'])){
                if(EntityStringUtils::is_invalid_string($entity_data['entity_code'])) {
                    $entity_data['entity_code'] = EntityStringUtils::get_token(8);
                }
            }
            if(isset($_POST['unit_id'])) {
                $unit_ids = $_POST['unit_id'];
                var_dump($building);
                
            }
            
            EntityRequestUtils::copy_fields_to_post($entity_data);
            $entity_data = EntityPersistenceAPI::create_entity($entity_data);
        } else {
            EntityRequestUtils::copy_fields_to_post($entity_data);
            // Edit mode dont need redirect...for now
            $entity_data['requires_redirect'] = false;
            $entity_data = EntityPersistenceAPI::update_entity($entity_data);
        }
        if(is_wp_error($entity_data['id'])) {
            $entity_data['has_errors'] = true;
            $entity_data['error_message'] = $post_id->get_error_message();
        }
        return $entity_data;
    }


    /**
     * Create the agreement
     */
    public static function create_agreement($entity_data) {
        $agreement_data = EntityAPIUtils::init_entity_data('agreement');

        $rent_agreement_type = EntityAPI::get_by_code('agreementtype', 'RENT_AGREEMENT');

        if(isset($rent_agreement_type['id'])) {
            $agreement_data['type'] = $rent_agreement_type['id'];
            $agreement_data['name'] = $entity_data['name'];
            $agreement_data['tenant'] = $entity_data['a_tenant'];
            $agreement_data['property'] = $entity_data['a_property'];
            $agreement_data['end_date'] = $entity_data['date_end'];
            $agreement_data['start_date'] = $entity_data['date_start'];
            $agreement_data['description'] = $entity_data['description'];

            $agreement_data = self::create_entity($agreement_data);
            // Create the agreement units
            self::create_agreement_units($agreement_data);
            // Create the agreement charges
            self::create_agreement_charges($agreement_data);
            // Create the agreement terms
            self::create_agreement_terms($agreement_data);
            // Create the rent stucture
            self::create_agreement_rent_structure($agreement_data);
        }
        return $agreement_data;
    }

    /**
     * Create the agreement units
     */
    public static function create_agreement_units($agreement_data) {
        if(!empty($_POST['unit_id'])) {
            foreach($_POST['unit_id'] as $unit_id) {
                $id = sanitize_text_field($unit_id);
                $agreementunit_data = EntityAPI::init_entity_data('agreementunit');
                $agreementunit_data['name'] = $agreement_data['name'];
                $agreementunit_data['au_unit'] = $id;
                $agreementunit_data['au_agreement'] = $agreement_data['id'];
                $agreementunit_data['description'] = $agreement_data['description'];
                $agreementunit_data = EntityAPI::create_entity($agreementunit_data);
            }
        }
    }

    /**
     * Create the agreement charges
     */
    public static function create_agreement_charges($agreement_data) {}

    /**
     * Create the agreement terms
     */
    public static function create_agreement_terms($agreement_data) {}

    /**
     * Create the agreement rent structure
     */
    public static function create_agreement_rent_structure($agreement_data) {
        // Get all applicable charges and expenses
        $total_charges = self::get_total_applicable_charges($agreement_data);
        $total_expenses = self::get_total_applicable_expenses($agreement_data);
        // Get number of months
        // Create rent entity for each month

    }

    /**
     * Get the total of the charges that apply to this agreement
     */
    public static function get_total_applicable_charges($agreement_data) {
        // 1. Get all property charges for this property
        // 2. Get all Building Charge -
        // 2. Get all Floor Charge -
        // 2. Get all Unit Type Charge -
        // 2. Get all Unit Charge -
        // 2. Get all Agreement Type Charge -
        // 2. Get all Agreement Charge -
        // 2. Get all Parking Facility Charge -
        // 2. Get all Parking Slot Type Charge -
    }

    /**
     * Get the total of the charges that apply to this agreement
     */
    public static function get_total_applicable_expenses($agreement_data) {
        // Get apportionment strategy
        // 1. Get all property charges for this property
        // 2. Get all Building Charge -
        // 2. Get all Floor Charge -
        // 2. Get all Unit Type Charge -
        // 2. Get all Unit Charge -
        // 2. Get all Agreement Type Charge -
        // 2. Get all Agreement Charge -
        // 2. Get all Parking Facility Charge -
        // 2. Get all Parking Slot Type Charge -
    }

}
