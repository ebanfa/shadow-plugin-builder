<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class PaymentBudgetAllocation extends Model {

    public $primaryKey = 'id';
    public $table = 'paymentbudgetallocation';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function budget()
    {
        return $this->belongsTo('Budget');
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