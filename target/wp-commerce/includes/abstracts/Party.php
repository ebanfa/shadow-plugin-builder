<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class Party extends Model {

    public $primaryKey = 'id';
    public $table = 'party';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function party_type()
    {
        return $this->belongsTo('PartyType');
    }
    /**
     * 
     */
    public function business_unit()
    {
        return $this->belongsTo('BusinessUnit');
    }

    /**
     * 
     */
    public function owner()
    {
        return $this->hasMany('Message');
    }
    /**
     * 
     */
    public function invoice_owner()
    {
        return $this->hasMany('Invoice');
    }
    /**
     * 
     */
    public function con_user()
    {
        return $this->hasMany('ConversationUser');
    }
    /**
     * 
     */
    public function partygroup_party()
    {
        return $this->hasMany('PartyGroup');
    }
    /**
     * 
     */
    public function from_party()
    {
        return $this->hasMany('Transaction');
    }
    /**
     * 
     */
    public function supplier_of_prod()
    {
        return $this->hasMany('ProductSupplier');
    }
    /**
     * 
     */
    public function placed_by_party()
    {
        return $this->hasMany('ProductOrder');
    }
    /**
     * 
     */
    public function to_party()
    {
        return $this->hasMany('Transaction');
    }
    /**
     * 
     */
    public function soc_party()
    {
        return $this->hasMany('SocialMediaAccount');
    }
    /**
     * 
     */
    public function person_party()
    {
        return $this->hasMany('Person');
    }
    /**
     * 
     */
    public function payment_to()
    {
        return $this->hasMany('Payment');
    }
    /**
     * 
     */
    public function counter_party()
    {
        return $this->hasMany('Message');
    }
    /**
     * 
     */
    public function payment_from()
    {
        return $this->hasMany('Payment');
    }
    /**
     * 
     */
    public function taken_by_party()
    {
        return $this->hasMany('ProductOrder');
    }
    /**
     * 
     */
    public function party()
    {
        return $this->hasMany('BillingAccount');
    }
    /**
     * 
     */
    public function n_owner()
    {
        return $this->hasMany('Notification');
    }

}

?>