<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class AgreementService extends Model {

    public $primaryKey = 'id';
    public $table = 'agreementservice';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function s_service()
    {
        return $this->belongsTo('Service');
    }
    /**
     * 
     */
    public function s_agreement()
    {
        return $this->belongsTo('Service');
    }
    /**
     * 
     */
    public function business_unit()
    {
        return $this->belongsTo('BusinessUnit');
    }


}

?>