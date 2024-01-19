'use client';
import ShowDetail from '../showDetail';

export default function Page({ params: { id } }: { params: { id: string } }) {
	return ShowDetail({ params: { id } });
}
