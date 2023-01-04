'use client'

import { usePreview } from "../../lib/sanity.preview"
import { PreviewContentProps } from './PreviewContent.types'
import ContentList from "../ContentList"

export default function PreviewContent({ query }: PreviewContentProps) {
    const content = usePreview(null, query);
    return <ContentList content={content} />
}