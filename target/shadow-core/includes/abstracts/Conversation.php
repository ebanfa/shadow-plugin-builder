<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class Conversation extends Model {

    public $primaryKey = 'id';
    public $table = 'conversation';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function owner()
    {
        return $this->belongsTo('Party');
    }
    /**
     * 
     */
    public function counter_party()
    {
        return $this->belongsTo('Party');
    }

    /**
     * 
     */
    public function conversation()
    {
        return $this->hasMany('Message');
    }

}

?>