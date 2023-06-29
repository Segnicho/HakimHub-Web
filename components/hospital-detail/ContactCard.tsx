import { TbBrandWebflow } from 'react-icons/tb'
import { MdPhone } from 'react-icons/md';
import Link from 'next/link';

interface ContactProps {
  website?: string;
  phoneNumber?: string;
}

const ContactCard: React.FC<ContactProps> = ({ website, phoneNumber }) => {
  return (
    <div className='flex flex-col drop-shadow shadow-xl rounded-[12px] bg-white mx-4 my-10 sm:w-[200px] md:w-[250px] md:h-[310px]'>
      <h1 className="text-2xl font-semi-bold my-2 text-center">Contact</h1>
      <div className="">
        <h3 className="text-xl my-2 mx-8">Reception</h3>
        <div className="flex items-center gap-3 bg-white rounded-lg drop-shadow-md my-4 mx-4">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.51667 6.99167C4.71667 9.35 6.65 11.275 9.00833 12.4833L10.8417 10.65C11.0667 10.425 11.4 10.35 11.6917 10.45C12.625 10.7583 13.6333 10.925 14.6667 10.925C15.125 10.925 15.5 11.3 15.5 11.7583V14.6667C15.5 15.125 15.125 15.5 14.6667 15.5C6.84167 15.5 0.5 9.15833 0.5 1.33333C0.5 0.875 0.875 0.5 1.33333 0.5H4.25C4.70833 0.5 5.08333 0.875 5.08333 1.33333C5.08333 2.375 5.25 3.375 5.55833 4.30833C5.65 4.6 5.58333 4.925 5.35 5.15833L3.51667 6.99167Z" fill="#3F3F3F"/>
        </svg>
        <p className="text-sm font-medium">{phoneNumber}</p>
        </div>
      </div>
     {(website && 
      <div className="my-2">
      <h3 className="text-xl my-2 mx-8">Web</h3>
      <div className="flex items-center gap-3 bg-white rounded-lg drop-shadow-md my-4 mx-4">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clipPath="url(#clip0_4333_1145)">
    <path d="M9.9915 1.6665C5.3915 1.6665 1.6665 5.39984 1.6665 9.99984C1.6665 14.5998 5.3915 18.3332 9.9915 18.3332C14.5998 18.3332 18.3332 14.5998 18.3332 9.99984C18.3332 5.39984 14.5998 1.6665 9.9915 1.6665ZM15.7665 6.6665H13.3082C13.0415 5.62484 12.6582 4.62484 12.1582 3.69984C13.6915 4.22484 14.9665 5.2915 15.7665 6.6665ZM9.99984 3.3665C10.6915 4.3665 11.2332 5.47484 11.5915 6.6665H8.40817C8.7665 5.47484 9.30817 4.3665 9.99984 3.3665ZM3.54984 11.6665C3.4165 11.1332 3.33317 10.5748 3.33317 9.99984C3.33317 9.42484 3.4165 8.8665 3.54984 8.33317H6.3665C6.29984 8.88317 6.24984 9.43317 6.24984 9.99984C6.24984 10.5665 6.29984 11.1165 6.3665 11.6665H3.54984ZM4.23317 13.3332H6.6915C6.95817 14.3748 7.3415 15.3748 7.8415 16.2998C6.30817 15.7748 5.03317 14.7165 4.23317 13.3332ZM6.6915 6.6665H4.23317C5.03317 5.28317 6.30817 4.22484 7.8415 3.69984C7.3415 4.62484 6.95817 5.62484 6.6915 6.6665ZM9.99984 16.6332C9.30817 15.6332 8.7665 14.5248 8.40817 13.3332H11.5915C11.2332 14.5248 10.6915 15.6332 9.99984 16.6332ZM11.9498 11.6665H8.04984C7.97484 11.1165 7.9165 10.5665 7.9165 9.99984C7.9165 9.43317 7.97484 8.87484 8.04984 8.33317H11.9498C12.0248 8.87484 12.0832 9.43317 12.0832 9.99984C12.0832 10.5665 12.0248 11.1165 11.9498 11.6665ZM12.1582 16.2998C12.6582 15.3748 13.0415 14.3748 13.3082 13.3332H15.7665C14.9665 14.7082 13.6915 15.7748 12.1582 16.2998ZM13.6332 11.6665C13.6998 11.1165 13.7498 10.5665 13.7498 9.99984C13.7498 9.43317 13.6998 8.88317 13.6332 8.33317H16.4498C16.5832 8.8665 16.6665 9.42484 16.6665 9.99984C16.6665 10.5748 16.5832 11.1332 16.4498 11.6665H13.6332Z" fill="#3F3F3F"/>
          </g>
          <defs>
            <clipPath id="clip0_4333_1145">
              <rect width="20" height="20" fill="white"/>
            </clipPath>
          </defs>
        </svg>
        <Link href = {`${website}`}>

        <p className="text-lg ml-2 hover:text-primary">website</p>
         </Link>      
      </div>
    </div>)} 
    </div>
  );
};

export default ContactCard;