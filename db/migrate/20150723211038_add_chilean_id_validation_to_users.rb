class AddChileanIdValidationToUsers < ActiveRecord::Migration
  def change
    add_column :users, :chilean_id_validation_enabled, :boolean
  end
end
