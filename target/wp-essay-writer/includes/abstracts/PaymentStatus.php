<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class PaymentStatus extends Model {

    public $primaryKey = 'id';
    public $table = 'paymentstatus';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;


    /**
     * 
     */
    public function payment_status()
    {
        return $this->hasMany('ContentOrder');
    }

}

?>