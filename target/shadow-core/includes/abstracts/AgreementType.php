<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class AgreementType extends Model {

    public $primaryKey = 'id';
    public $table = 'agreementtype';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function category()
    {
        return $this->belongsTo('AgreementCategory');
    }
    /**
     * 
     */
    public function business_category()
    {
        return $this->belongsTo('BusinessCategory');
    }

    /**
     * 
     */
    public function atc_type()
    {
        return $this->hasMany('AgreementTypeCharge');
    }
    /**
     * 
     */
    public function type()
    {
        return $this->hasMany('Agreement');
    }

}

?>