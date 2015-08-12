class AddSignedToParticipant < ActiveRecord::Migration
  def change
    add_column :participants, :signed, :boolean, default: false
    add_column :participants, :signed_at, :datetime
  end
end
