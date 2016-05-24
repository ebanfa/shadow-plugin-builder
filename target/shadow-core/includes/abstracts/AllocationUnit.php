<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class AllocationUnit extends Model {

    public $primaryKey = 'id';
    public $table = 'allocationunit';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;


    /**
     * 
     */
    public function flr_allocation()
    {
        return $this->hasMany('Floor');
    }
    /**
     * 
     */
    public function b_unitalloc()
    {
        return $this->hasMany('Building');
    }

}

?>