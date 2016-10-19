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
    public function party_role_party()
    {
        return $this->hasMany('PartyRole');
    }
    /**
     * 
     */
    public function reviewed_by()
    {
        return $this->hasMany('PartyReview');
    }
    /**
     * 
     */
    public function profile_party()
    {
        return $this->hasMany('PartyProfile');
    }
    /**
     * 
     */
    public function dispute_owner()
    {
        return $this->hasMany('Dispute');
    }
    /**
     * 
     */
    public function order_tutor()
    {
        return $this->hasMany('ContentOrder');
    }
    /**
     * 
     */
    public function b_account_party()
    {
        return $this->hasMany('BillingAccount');
    }
    /**
     * 
     */
    public function qualification_party()
    {
        return $this->hasMany('PartyQualification');
    }
    /**
     * 
     */
    public function subject_party()
    {
        return $this->hasMany('PartySubjectArea');
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
    public function reviewed_party()
    {
        return $this->hasMany('PartyReview');
    }
    /**
     * 
     */
    public function group_party()
    {
        return $this->hasMany('PartyGroup');
    }
    /**
     * 
     */
    public function file_party()
    {
        return $this->hasMany('PartyFile');
    }
    /**
     * 
     */
    public function order_party()
    {
        return $this->hasMany('ContentOrder');
    }

}

?>