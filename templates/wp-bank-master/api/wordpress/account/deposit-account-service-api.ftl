<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class DepositAccountAPI {

    public static $deposit_account_type = 'DEPOSIT_ACCOUNT';
    public static $deposit_product_type = 'TRANSACTIONAL_ACCOUNT';

    /**
     *
     */
    public static function do_create_entity($entity_data){
        return EntityAPI::do_create_entity($entity_data);
    }

    /**
     *  Creates the user associated with an order, or returns 
     *  the user's data if the user already exists
     */
    public static function do_create_account($user_party)
    {
        $product_data = EntityAPI::get_by_code('producttype', self::$deposit_product_type);
        $account_type_data = EntityAPI::get_by_code('accounttype', self::$deposit_account_type);

        $entity_data = EntityAPIUtils::init_entity_data('account');
        if(!isset($user_party['id']) || !isset($product_data['id']) || !isset($account_type_data['id'])) 
            return EntityAPIUtils::init_error($entity_data, 'Required information is missing for account creation');

        $entity_data['balance'] = 0.00;
        $entity_data['edit_mode'] = true;
        $entity_data['name'] = $user_party['name'];
        $entity_data['account_party'] = $user_party['id'];
        $entity_data['description'] = $user_party['name'];
        $entity_data['account_product'] = $product_data['id'];
        $entity_data['account_type'] = $account_type_data['id'];

        return EntityAPI::do_create_entity($entity_data);
    }
}
