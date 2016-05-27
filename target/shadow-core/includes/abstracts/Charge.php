<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class Charge extends Model {

    public $primaryKey = 'id';
    public $table = 'charge';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function type()
    {
        return $this->belongsTo('ChargeType');
    }
    /**
     * 
     */
    public function frequency()
    {
        return $this->belongsTo('ChargeFrequency');
    }

    /**
     * 
     */
    public function utc_charge()
    {
        return $this->hasMany('UnitTypeCharge');
    }
    /**
     * 
     */
    public function atc_charge()
    {
        return $this->hasMany('AgreementTypeCharge');
    }
    /**
     * 
     */
    public function uc_charge()
    {
        return $this->hasMany('UnitCharge');
    }
    /**
     * 
     */
    public function pstc_charge()
    {
        return $this->hasMany('ParkingSlotTypeCharge');
    }
    /**
     * 
     */
    public function ac_charge()
    {
        return $this->hasMany('AgreementCharge');
    }
    /**
     * 
     */
    public function fc_charge()
    {
        return $this->hasMany('FloorCharge');
    }
    /**
     * 
     */
    public function cia_charge()
    {
        return $this->hasMany('ChargeInAgreement');
    }
    /**
     * 
     */
    public function pc_charge()
    {
        return $this->hasMany('PropertyCharge');
    }
    /**
     * 
     */
    public function bc_charge()
    {
        return $this->hasMany('BuildingCharge');
    }

}

?>