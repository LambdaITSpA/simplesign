class Document < ActiveRecord::Base
  has_many :participants, dependent: :destroy
  has_many :users, through: :participants
  has_attached_file :file
  validates_attachment :file, content_type: { content_type: "application/pdf" }

  def sign(user)
  	participant = self.participant user
  	participant.update signed: true, signed_at: Time.now
  	self.update signed: true, signed_at: Time.now unless self.signs_pending?
  end

  def signs_pending
  	self.participants.where(signed: false).count
  end

  def signs_pending?
  	self.signs_pending > 0
  end

  def participant(user)
  	Participant.find_by user: user, document: self
  end
end
