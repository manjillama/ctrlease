import { HeadFC } from 'gatsby';
import React from 'react';
import { SEO } from '../components/seo';
import Layout from '../components/layout';
import { HiMail, HiLocationMarker } from 'react-icons/hi';

const ContactPage = () => (
  <Layout>
    <div className="max-w-[1024px] mx-auto py-20 relative z-10">
      <div className="bg-emerald-50 rounded-full h-[350px] w-[350px] block absolute z-[-1] m-[-70px]" />
      <h1 className="text-5xl font-bold mb-2">Contact</h1>
      <p className="mb-8">
        Got any question for us or need a custom driver guide from our experts? Or just say hi! We love getting your
        mails.
      </p>
      <p className="flex items-center mb-4">
        <HiMail size={24} className="mr-2" />{' '}
        <a href="mailto:hello@ctrlease.com" className="hover:text-sky-500 underline">
          prash@ctrlease.com
        </a>
      </p>
      <p className="flex items-center mb-4">
        <HiLocationMarker size={24} className="mr-2" /> <span>Boston, MA, USA</span>
      </p>
    </div>
  </Layout>
);

export default ContactPage;

export const Head: HeadFC = () => <SEO title={'Contact | CtrlEase'} />;
