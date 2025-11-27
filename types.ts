import React from 'react';

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export enum ComplianceStatus {
  Unchecked = 'UNCHECKED',
  Compliant = 'COMPLIANT',
  NonCompliant = 'NON_COMPLIANT',
  Warning = 'WARNING'
}