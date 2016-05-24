<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class FundingMethod extends Model {

    public $primaryKey = 'id';
    public $table = 'fundingmethod';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;



}

?>