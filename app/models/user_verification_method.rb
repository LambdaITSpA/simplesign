class UserVerificationMethod < ActiveRecord::Base
  belongs_to :country
  has_many :user_verification_data
  has_many :users, through: :user_verification_data
end