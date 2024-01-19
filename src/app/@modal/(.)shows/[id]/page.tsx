'use client';
import showDetail from '../../../shows/showDetail';

export default function Page({ params: { id } }: { params: { id: string } }) {
	return showDetail({ params: { id } });
}
