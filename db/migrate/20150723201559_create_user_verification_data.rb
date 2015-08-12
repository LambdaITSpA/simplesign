class CreateUserVerificationData < ActiveRecord::Migration
  def change
    create_table :user_verification_data do |t|
      t.string :id_number
      t.boolean :verified
      t.boolean :enabled
      t.references :user_verification_method, index: true, foreign_key: true
      t.references :user, index: true, foreign_key: true
    end
  end
end
