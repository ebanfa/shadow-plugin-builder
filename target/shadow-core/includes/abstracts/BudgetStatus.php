<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class BudgetStatus extends Model {

    public $primaryKey = 'id';
    public $table = 'budgetstatus';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;



}

?>