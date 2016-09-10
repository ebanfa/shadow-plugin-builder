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
    public function ir_partyrole()
    {
        return $this->hasMany('InvoiceRole');
    }
    /**
     * 
     */
    public function owner_role()
    {
        return $this->hasMany('Invoice');
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
    public function from_role()
    {
        return $this->hasMany('PartyRelationship');
    }
    /**
     * 
     */
    public function to_role()
    {
        return $this->hasMany('PartyRelationship');
    }

}

?>