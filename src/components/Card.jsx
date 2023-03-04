import { Card } from 'flowbite-react';
import React from 'react';
import { mockCompanies } from '../mocks/Companies';

export default function CompanyCard() {
  return (
    <div className="max-w-s grid grid-cols-3 gap-3">
      {mockCompanies.companies.map((company) => {
        return (
          <Card imgAlt="" key={company.id} imgSrc={company.logo}>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {company.name}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {company.description}
            </p>
          </Card>
        );
      })}
    </div>
  );
}
