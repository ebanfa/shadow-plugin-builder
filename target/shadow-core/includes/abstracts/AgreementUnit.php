<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class AgreementUnit extends Model {

    public $primaryKey = 'id';
    public $table = 'agreementunit';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function au_agreement()
    {
        return $this->belongsTo('Agreement');
    }
    /**
     * 
     */
    public function au_unit()
    {
        return $this->belongsTo('Unit');
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