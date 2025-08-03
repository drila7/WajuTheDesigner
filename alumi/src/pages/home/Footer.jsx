import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-green-700 dark:bg-background text-white dark:text-green-500 py-16 " id="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-3">
            <h3 className="text-2xl font-bold mb-4 ">Mufutan Solutions Pro</h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Leading manufacturer of high-performance aluminum products for modern architecture. 
              Quality, innovation, and sustainability in every project.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-green-950 dark:bg-white dark:hover:bg-gray-200 hover:bg-green-600 rounded-full flex items-center justify-center cursor-pointer transition-colors">
                <span className="text-sm font-bold dark:text-black">f</span>
              </div>
              <div className="w-10 h-10 bg-green-950 hover:bg-green-600 dark:bg-white dark:hover:bg-gray-200 rounded-full flex items-center justify-center cursor-pointer transition-colors">
                <span className="text-sm font-bold dark:text-black">in</span>
              </div>
              <div className="w-10 h-10 bg-green-950 hover:bg-green-600 dark:bg-white dark:hover:bg-gray-200 rounded-full flex items-center justify-center cursor-pointer transition-colors">
                <span className="text-sm font-bold dark:text-black">@</span>
              </div>
            </div>
          </div>
  
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Windows</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Curtain Walls</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Doors</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Custom Fabrication</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Installation</a></li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-50 mt-12 pt-8 text-center">
          <p className="text-gray-100">
            © 2024 Mufutan Global LTD. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
