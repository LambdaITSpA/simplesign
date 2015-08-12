class CreateUserVerificationMethods < ActiveRecord::Migration
  def change
    create_table :user_verification_methods do |t|
      t.string :name
      t.references :country, index: true, foreign_key: true
    end
  end
end
