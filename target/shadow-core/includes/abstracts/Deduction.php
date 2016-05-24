<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class Deduction extends Model {

    public $primaryKey = 'id';
    public $table = 'deduction';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function deduction_type()
    {
        return $this->belongsTo('DeductionType');
    }
    /**
     * 
     */
    public function payment()
    {
        return $this->belongsTo('Payment');
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