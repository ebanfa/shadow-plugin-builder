<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class GLAccountType extends Model {

    public $primaryKey = 'id';
    public $table = 'glaccounttype';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;


    /**
     * 
     */
    public function glacct_type()
    {
        return $this->hasMany('GLAccount');
    }

}

?>