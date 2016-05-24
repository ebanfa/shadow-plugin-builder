<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class IncomeDataType extends Model {

    public $primaryKey = 'id';
    public $table = 'incomedatatype';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;


    /**
     * 
     */
    public function id_type()
    {
        return $this->hasMany('IncomeData');
    }

}

?>