<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class BudgetRole extends Model {

    public $primaryKey = 'id';
    public $table = 'budgetrole';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function party()
    {
        return $this->belongsTo('Party');
    }
    /**
     * 
     */
    public function role()
    {
        return $this->belongsTo('RoleType');
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