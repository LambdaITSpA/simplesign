class UserVerificationDatum < ActiveRecord::Base
  belongs_to :user_verification_method
  belongs_to :user

  def chilean_id_valid?(serial)
  	registro_civil_url = "https://portal.sidiv.registrocivil.cl/docstatus?RUN=#{self.id_number}&type=CEDULA&serial=#{serial}"
	doc = Nokogiri::HTML(open(registro_civil_url, {ssl_verify_mode: OpenSSL::SSL::VERIFY_NONE}))
	valid_chilean_id = doc.css('#tableResult > tbody > tr > td.setWidthOfSecondColumn').text == 'Vigente'
	valid_chilean_id
  end
end
