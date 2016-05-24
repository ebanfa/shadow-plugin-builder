<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class AgreementItem extends Model {

    public $primaryKey = 'id';
    public $table = 'agreementitem';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function ai_agreement()
    {
        return $this->belongsTo('Agreement');
    }
    /**
     * 
     */
    public function ai_type()
    {
        return $this->belongsTo('AgreementItemType');
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