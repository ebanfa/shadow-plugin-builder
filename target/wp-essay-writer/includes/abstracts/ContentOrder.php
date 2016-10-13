<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class ContentOrder extends Model {

    public $primaryKey = 'id';
    public $table = 'contentorder';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function order_type()
    {
        return $this->belongsTo('ContentOrderType');
    }
    /**
     * 
     */
    public function order_status()
    {
        return $this->belongsTo('ContentOrderStatus');
    }
    /**
     * 
     */
    public function payment_status()
    {
        return $this->belongsTo('PaymentStatus');
    }
    /**
     * 
     */
    public function order_content()
    {
        return $this->belongsTo('Content');
    }
    /**
     * 
     */
    public function order_party()
    {
        return $this->belongsTo('Party');
    }
    /**
     * 
     */
    public function academic_level()
    {
        return $this->belongsTo('AcademicLevel');
    }
    /**
     * 
     */
    public function document_type()
    {
        return $this->belongsTo('DocumentType');
    }
    /**
     * 
     */
    public function numpages()
    {
        return $this->belongsTo('NoOfPages');
    }
    /**
     * 
     */
    public function subject_area()
    {
        return $this->belongsTo('SubjectArea');
    }
    /**
     * 
     */
    public function urgency()
    {
        return $this->belongsTo('Urgency');
    }
    /**
     * 
     */
    public function writing_style()
    {
        return $this->belongsTo('WritingStyle');
    }

    /**
     * 
     */
    public function dispute_order()
    {
        return $this->hasMany('Dispute');
    }
    /**
     * 
     */
    public function file_content_order()
    {
        return $this->hasMany('ContentOrderFile');
    }

}

?>