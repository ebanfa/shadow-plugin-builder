<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class PartyReview extends Model {

    public $primaryKey = 'id';
    public $table = 'partyreview';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function reviewed_party()
    {
        return $this->belongsTo('Party');
    }
    /**
     * 
     */
    public function reviewed_by()
    {
        return $this->belongsTo('Party');
    }


}

?>