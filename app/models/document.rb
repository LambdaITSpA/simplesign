class Document < ActiveRecord::Base
  has_many :participants, dependent: :destroy
  has_many :users, through: :participants
  has_attached_file :file
  validates_attachment :file, content_type: { content_type: "application/pdf" }
end
