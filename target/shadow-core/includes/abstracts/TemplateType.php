<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class TemplateType extends Model {

    public $primaryKey = 'id';
    public $table = 'templatetype';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;


    /**
     * 
     */
    public function t_type()
    {
        return $this->hasMany('Template');
    }

}

?>