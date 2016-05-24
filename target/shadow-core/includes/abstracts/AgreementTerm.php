<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class AgreementTerm extends Model {

    public $primaryKey = 'id';
    public $table = 'agreementterm';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function at_agreement()
    {
        return $this->belongsTo('Agreement');
    }
    /**
     * 
     */
    public function at_term()
    {
        return $this->belongsTo('Term');
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