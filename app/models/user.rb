class User < ActiveRecord::Base
  has_many :participants
  has_many :documents, through: :participants
  belongs_to :country
  has_many :user_verification_data
  has_many :user_verification_methods, through: :user_verification_data
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  has_attached_file :avatar, styles: { medium: '300x300>', thumb: '100x100>' }, default_url: '/images/:style/missing.png'
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\Z/

  def valid_chilean?(serial)
    registro_civil_url = "https://portal.sidiv.registrocivil.cl/docstatus?RUN=#{self.id_number}&type=CEDULA&serial=#{serial}"
    doc = Nokogiri::HTML(open(registro_civil_url, {ssl_verify_mode: OpenSSL::SSL::VERIFY_NONE}))
    valid_chilean_id = doc.css('#tableResult > tbody > tr > td.setWidthOfSecondColumn').text == 'Vigente'
    valid_chilean_id
  end

  def valid_chilean_with_rut?(rut,serial)
    registro_civil_url = "https://portal.sidiv.registrocivil.cl/docstatus?RUN=#{rut}&type=CEDULA&serial=#{serial}"
    doc = Nokogiri::HTML(open(registro_civil_url, {ssl_verify_mode: OpenSSL::SSL::VERIFY_NONE}))
    valid_chilean_id = doc.css('#tableResult > tbody > tr > td.setWidthOfSecondColumn').text == 'Vigente'
    valid_chilean_id
  end

  def full_name
  	first_name + ' ' + last_name
  end

  def participant(document)
    Participant.find_by user: self, document: document
  end

  def signed(document)
    self.participant(document).signed
  end
end
