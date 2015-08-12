class Country < ActiveRecord::Base
  has_many :users
  has_many :user_verification_methods
end
