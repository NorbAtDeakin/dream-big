class CreateRoleTypes < ActiveRecord::Migration[7.0]
  def change
    create_table :role_types do |t|

      t.timestamps
    end
  end
end
