class Event < ActiveRecord::Base
 has_many :payments, :dependent => :destroy
 accepts_nested_attributes_for :payments,allow_destroy: true

	def payments_for_form
      collection = self.payments
      collection.any? ? collection : payments.build
   end
end
