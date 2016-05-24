<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class ChargeFrequency extends Model {

    public $primaryKey = 'id';
    public $table = 'chargefrequency';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;


    /**
     * 
     */
    public function frequency()
    {
        return $this->hasMany('Charge');
    }

}

?>