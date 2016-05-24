<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class MortgageType extends Model {

    public $primaryKey = 'id';
    public $table = 'mortgagetype';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;


    /**
     * 
     */
    public function m_type()
    {
        return $this->hasMany('Mortgage');
    }

}

?>