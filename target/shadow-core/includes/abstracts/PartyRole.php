<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class PartyRole extends Model {

    public $primaryKey = 'id';
    public $table = 'partyrole';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function party()
    {
        return $this->belongsTo('Party');
    }
    /**
     * 
     */
    public function role()
    {
        return $this->belongsTo('RoleType');
    }
    /**
     * 
     */
    public function parent_unit()
    {
        return $this->belongsTo('BusinessUnit');
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
    public function p_tpartyrole()
    {
        return $this->hasMany('Payment');
    }
    /**
     * 
     */
    public function d_tpartyrole()
    {
        return $this->hasMany('Disbursement');
    }
    /**
     * 
     */
    public function from_role()
    {
        return $this->hasMany('PerformanceReview');
    }
    /**
     * 
     */
    public function for_role()
    {
        return $this->hasMany('PerformanceReview');
    }
    /**
     * 
     */
    public function ir_partyrole()
    {
        return $this->hasMany('InvoiceRole');
    }
    /**
     * 
     */
    public function d_fpartyrole()
    {
        return $this->hasMany('Disbursement');
    }
    /**
     * 
     */
    public function regarding()
    {
        return $this->hasMany('PerformanceNote');
    }
    /**
     * 
     */
    public function r_tpartyrole()
    {
        return $this->hasMany('Receipt');
    }
    /**
     * 
     */
    public function fr_partyrole()
    {
        return $this->hasMany('FacilityRole');
    }
    /**
     * 
     */
    public function ps_staff()
    {
        return $this->hasMany('PropertyStaff');
    }
    /**
     * 
     */
    public function owner_role()
    {
        return $this->hasMany('PurchaseOrder');
    }
    /**
     * 
     */
    public function parent_prole()
    {
        return $this->hasMany('PartyRole');
    }
    /**
     * 
     */
    public function pr_partyrole()
    {
        return $this->hasMany('PurchaseOrderRole');
    }
    /**
     * 
     */
    public function r_fpartyrole()
    {
        return $this->hasMany('Receipt');
    }
    /**
     * 
     */
    public function to_role()
    {
        return $this->hasMany('PartyRelationship');
    }
    /**
     * 
     */
    public function p_fpartyrole()
    {
        return $this->hasMany('Payment');
    }
    /**
     * 
     */
    public function given_by()
    {
        return $this->hasMany('PerformanceNote');
    }
    /**
     * 
     */
    public function party_role()
    {
        return $this->hasMany('RequirementRole');
    }

}

?>