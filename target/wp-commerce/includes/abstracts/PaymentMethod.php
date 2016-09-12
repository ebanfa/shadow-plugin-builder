<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class PaymentMethod extends Model {

    public $primaryKey = 'id';
    public $table = 'paymentmethod';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;


    /**
     * 
     */
    public function p_methtype()
    {
        return $this->hasMany('Payment');
    }

}

?>