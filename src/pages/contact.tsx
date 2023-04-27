import { HeadFC } from 'gatsby';
import React from 'react';
import { SEO } from '../components/seo';
import Layout from '../components/layout';
import { HiMail, HiLocationMarker } from 'react-icons/hi';

const ContactPage = () => (
  <Layout>
    <div className="max-w-[1024px] mx-auto py-20 relative z-10">
      <circle className="bg-emerald-50 rounded-full h-[350px] w-[350px] block absolute z-[-1] m-[-70px]" />
      <h1 className="text-5xl font-bold mb-2">Contact</h1>
      <p className="mb-8">
        Got any question for us or need a custom driver guide from our experts? Or just say hi! We love getting your
        mails.
      </p>
      <p className="flex items-center mb-4">
        <HiMail size={24} className="mr-2" />{' '}
        <a href="mailto:hello@manjiltamang.com" className="hover:text-sky-500 hover:underline">
          hello@manjiltamang.com
        </a>
      </p>
      <p className="flex items-center mb-4">
        <HiLocationMarker size={24} className="mr-2" /> <span>1027 Flatbush Ave, Brooklyn, NY 11226</span>
      </p>
    </div>
  </Layout>
);

export default ContactPage;

export const Head: HeadFC = () => <SEO title={'Contact | CtrlEase'} />;
