<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class PaymentType extends Model {

    public $primaryKey = 'id';
    public $table = 'paymenttype';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;


    /**
     * 
     */
    public function p_type()
    {
        return $this->hasMany('Payment');
    }

}

?>