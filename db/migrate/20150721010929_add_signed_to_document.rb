class AddSignedToDocument < ActiveRecord::Migration
  def change
    add_column :documents, :signed, :boolean, default: false
    add_column :documents, :signed_at, :datetime
  end
end
