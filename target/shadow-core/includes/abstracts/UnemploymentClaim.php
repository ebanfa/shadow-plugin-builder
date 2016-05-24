<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class UnemploymentClaim extends Model {

    public $primaryKey = 'id';
    public $table = 'unemploymentclaim';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function status()
    {
        return $this->belongsTo('UnemploymentClaimStatus');
    }
    /**
     * 
     */
    public function employment()
    {
        return $this->belongsTo('RelationshipType');
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