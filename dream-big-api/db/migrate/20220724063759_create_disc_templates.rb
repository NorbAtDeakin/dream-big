class CreateDiscTemplates < ActiveRecord::Migration[7.0]
  def change
    create_table :disc_templates do |t|

      t.timestamps
    end
  end
end
