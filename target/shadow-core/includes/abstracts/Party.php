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
    public function submitter()
    {
        return $this->hasMany('TimeSheet');
    }
    /**
     * 
     */
    public function held_by()
    {
        return $this->hasMany('PartyQualification');
    }
    /**
     * 
     */
    public function l_party()
    {
        return $this->hasMany('Liability');
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
    public function from_party()
    {
        return $this->hasMany('Transaction');
    }
    /**
     * 
     */
    public function li_owner()
    {
        return $this->hasMany('Land');
    }
    /**
     * 
     */
    public function pa_sellagent()
    {
        return $this->hasMany('PurchaseAgreement');
    }
    /**
     * 
     */
    public function a_counter_party()
    {
        return $this->hasMany('Agreement');
    }
    /**
     * 
     */
    public function m_party()
    {
        return $this->hasMany('Mortgage');
    }
    /**
     * 
     */
    public function wepa_party()
    {
        return $this->hasMany('WorkEffortPartyAssignment');
    }
    /**
     * 
     */
    public function lender()
    {
        return $this->hasMany('Mortgage');
    }
    /**
     * 
     */
    public function i_party()
    {
        return $this->hasMany('Inventory');
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
    public function a_party()
    {
        return $this->hasMany('Assessment');
    }
    /**
     * 
     */
    public function pa_listagent()
    {
        return $this->hasMany('PurchaseAgreement');
    }
    /**
     * 
     */
    public function p_party()
    {
        return $this->hasMany('Property');
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
    public function pa_seller()
    {
        return $this->hasMany('PurchaseAgreement');
    }
    /**
     * 
     */
    public function pa_buyer()
    {
        return $this->hasMany('PurchaseAgreement');
    }
    /**
     * 
     */
    public function party()
    {
        return $this->hasMany('PartyAssetAssignment');
    }
    /**
     * 
     */
    public function tenant()
    {
        return $this->hasMany('Rent');
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